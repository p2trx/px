from px_client.client import Client


def run():
    px = Client('localhost:50000')
    px.launch()
    px.goto(url='https://katalon-test.s3.amazonaws.com/aut/html/form.html')
    px.type(selector='#first-name', text='First Name')
    px.type(selector='#last-name', text='Last Name')
    px.click(selector='input[type=radio][name=gender]')
    px.click(selector='#dob')
    px.click(selector='body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)')
    px.type(selector='#address', text='Address')
    px.type(selector='#email', text='email@email.com')
    px.type(selector='#password', text='Password')
    px.type(selector='#company', text='Company')
    px.select(selector='#role', values=['Manager'])
    px.select(selector='#expectation', values=['High salary'])
    px.click(selector='.development-ways .checkbox:nth-child(1) input')
    px.click(selector='.development-ways .checkbox:nth-child(2) input')
    px.click(selector='.development-ways .checkbox:nth-child(3) input')
    px.click(selector='.development-ways .checkbox:nth-child(4) input')
    px.click(selector='.development-ways .checkbox:nth-child(5) input')
    px.click(selector='.development-ways .checkbox:nth-child(6) input')
    px.type(selector='#comment', text='Comment')
    px.click(selector='#submit')
    px.get_text(selector='#submit-msg')
    px.close()


if __name__ == "__main__":
    run()
