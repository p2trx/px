import grpc
import px.px_pb2 as px
from px.px_pb2_grpc import BrowserStub
from timeit import default_timer as timer
import action


def doActions(stub):
    start = timer()
    actions = [
        action.type(selector='#first-name', text='First Name'),
        action.type(selector='#last-name', text='Last Name'),
        action.click(selector='input[type=radio][name=gender]'),
        action.click(selector='#dob'),
        action.click(selector='body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)'),
        action.type(selector='#address', text='Address'),
        action.type(selector='#email', text='email@email.com'),
        action.type(selector='#password', text='Password'),
        action.type(selector='#company', text='Company'),
        action.select(selector='#role', values=['Manager']),
        action.select(selector='#expectation', values=['High salary']),
        action.click(selector='.development-ways .checkbox:nth-child(1) input'),
        action.click(selector='.development-ways .checkbox:nth-child(2) input'),
        action.click(selector='.development-ways .checkbox:nth-child(3) input'),
        action.click(selector='.development-ways .checkbox:nth-child(4) input'),
        action.click(selector='.development-ways .checkbox:nth-child(5) input'),
        action.click(selector='.development-ways .checkbox:nth-child(6) input'),
        action.type(selector='#comment', text='Comment'),
        action.click(selector='#submit'),
        action.get_text(selector='#submit-msg'),
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    elapsed = timer() - start
    print('Elapsed: {:.3f}s'.format(elapsed))


def do(stub):
    actions = [
        action.launch(),
        action.goto(url='https://katalon-test.s3.amazonaws.com/aut/html/form.html')
    ]
    request = px.DoRequest(actions=actions)
    stub.Do(request)
    doActions(stub)


def run():
    with grpc.insecure_channel('localhost:50000') as channel:
        stub = BrowserStub(channel)
        do(stub)


if __name__ == "__main__":
    run()
