/* eslint-disable prettier/prettier */

const webScenario = [
  { launchAction: { headless: false } },
  { gotoAction: { url: 'https://katalon-test.s3.amazonaws.com/aut/html/form.html' } },
  { setCookieAction: { name: 'jwt_token', value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTAzMjE1MDEsInN1YiI6NCwiaWF0IjoxNTEwMjYxNTAxLCJqdGkiOiJLYnoxSmxDMDlDTXRndXBhQzRLRHRnIn0.NkgBUKof9VUm_FrEicDRP3I-G-tIEl0feXS-RAGtyj4' } },
  { cookiesAction: {} },
  { deleteCookieAction: { name: 'jwt_token' } },
  { cookiesAction: {} },
  { startTracingAction: { path: 'test/output/trace.json' } },
  { waitAction: { time: 2000 } },
  { typeAction: { selector: '#first-name', text: 'First Name' } },
  { typeAction: { selector: '#last-name', text: 'Last Name' } },
  { clickAction: { selector: 'input[type=radio][name=gender]' } },
  { clickAction: { selector: '#dob' } },
  { clickAction: { selector: 'body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)' } },
  { typeAction: { selector: '#address', text: 'Address' } },
  { typeAction: { selector: '#email', text: 'email@email.com' } },
  { typeAction: { selector: '#password', text: 'Password' } },
  { typeAction: { selector: '#company', text: 'Company' } },
  { selectAction: { selector: '#role', values: ['Manager'] } },
  { selectAction: { selector: '#expectation', values: ['High salary'] } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(1) input' } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(2) input' } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(3) input' } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(4) input' } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(5) input' } },
  { clickAction: { selector: '.development-ways .checkbox:nth-child(6) input' } },
  { typeAction: { selector: '#comment', text: 'Comment' } },
  { clickAction: { selector: '#submit' } },
  { getInnerTextAction: { selector: '#submit-msg' } },
  { screenshotAction: { path: 'test/output/screenshot.png', fullPage: true } },
  // Test double click
  { gotoAction: { url: 'https://unixpapa.com/js/testmouse.html' } },
  { waitAction: { time: 2000 } },
  // double click
  { clickAction: { selector: 'body > table > tbody > tr > td > a:nth-child(1)', button: 'left', clickCount: 2 } },
  // left click
  { clickAction: { selector: 'body > table > tbody > tr > td > a:nth-child(1)', button: 'left', clickCount: 1 } },
  // right click
  { clickAction: { selector: 'body > table > tbody > tr > td > a:nth-child(1)', button: 'right', clickCount: 1 } },
  { screenshotAction: { path: 'test/output/double_click.png', fullPage: true } },
  { emulateMediaTypeAction: { type: 'screen' } },
  { gotoAction: { url: 'https://www.youtube.com/watch?v=T5GSLc-i5Xo' } },
  { reloadAction: {} },
  { evaluateAction: { evaluateFunction: 'window.scrollTo(0, 1000000)' } },
  { stopTracingAction: {} },
  { closeAction: {} },
  { launchAction: { headless: true } },
  { gotoAction: { url: 'https://google.com', headless: true } },
  { pdfAction: { path: 'test/output/test.pdf', format: 'A4' } },
  { closeAction: {} }
]

module.exports = {
  webScenario
}
