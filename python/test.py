import grpc
from px.px_pb2_grpc import BrowserStub
from timeit import default_timer as timer
import action as px


def doActions(stub):
    start = timer()
    px.type(stub=stub, selector='#first-name', text='First Name'),
    px.type(stub=stub, selector='#last-name', text='Last Name'),
    px.click(stub=stub, selector='input[type=radio][name=gender]'),
    px.click(stub=stub, selector='#dob'),
    px.click(stub=stub, selector='body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'),
    px.type(stub=stub, selector='#address', text='Address'),
    px.type(stub=stub, selector='#email', text='email@email.com'),
    px.type(stub=stub, selector='#password', text='Password'),
    px.type(stub=stub, selector='#company', text='Company'),
    px.select(stub=stub, selector='#role', values=['Manager']),
    px.select(stub=stub, selector='#expectation', values=['High salary']),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(1) input'),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(2) input'),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(3) input'),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(4) input'),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(5) input'),
    px.click(stub=stub, selector='.development-ways .checkbox:nth-child(6) input'),
    px.type(stub=stub, selector='#comment', text='Comment'),
    px.click(stub=stub, selector='#submit'),
    px.get_text(stub=stub, selector='#submit-msg'),
    elapsed = timer() - start
    print('Elapsed: {:.3f}s'.format(elapsed))


def do(stub):
    px.launch(stub=stub),
    px.goto(stub=stub, url='https://katalon-test.s3.amazonaws.com/aut/html/form.html')
    doActions(stub)


def run():
    with grpc.insecure_channel('localhost:50000') as channel:
        stub = BrowserStub(channel)
        do(stub)


if __name__ == "__main__":
    run()
