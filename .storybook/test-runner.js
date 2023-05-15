const  {injectAxe, checkA11y, getViolations} = require('axe-playwright');

module.exports = {
  setup() {
    expect.extend({
      toValidA11y(violations) {
        if(violations.length === 0) {
          return {pass: true};
        }
        return {
          message: () => 
            'アクセシビリティエラーが見つかりました。\n' + 
            JSON.stringfy(
              violations.map(({id, imapct, description, help}) => ({
                id, imapct, description, help,
              })), 
              '\n',
              ' '
            ),
            pass: false
        }
      }
    })
  },
  async preRender(page) {
    await injectAxe(page);
  },
  async postRnder(page) {
    const violations = await getViolations(page, '#storybook-root');
    expect(violations).toValidA11y()
    // await checkA11y(page, '#storybook-root', {
    //   detailedReport: true,
    //   detailedReportOptions: {
    //     html: true,
    //   }
    // })
  }
}