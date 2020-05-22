package c.k.px;

import java.util.Arrays;

import c.k.px.client.Client;

public class Test {

  public static void main(String[] args) {
    Client px = null;
    try {
      px = new Client();
      px.launch();
      px.go("https://katalon-test.s3.amazonaws.com/aut/html/form.html");
      px.type("#first-name", "First Name");
      px.type("#last-name", "Last Name");
      px.click("input[type=radio][name=gender]");
      px.click("#dob");
      px.click("body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top > div.datepicker-days > table > tbody > tr:nth-child(1) > td:nth-child(1)");
      px.type("#address", "Address");
      px.type("#email", "email@email.com");
      px.type("#password", "Password");
      px.type("#company", "Company");
      px.select("#role", Arrays.asList("Manager"));
      px.select("#expectation", Arrays.asList("High salary"));
      px.click(".development-ways .checkbox:nth-child(1) input");
      px.click(".development-ways .checkbox:nth-child(2) input");
      px.click(".development-ways .checkbox:nth-child(3) input");
      px.click(".development-ways .checkbox:nth-child(4) input");
      px.click(".development-ways .checkbox:nth-child(5) input");
      px.click(".development-ways .checkbox:nth-child(6) input");
      px.type("#comment", "Comment");
      px.click("#submit");
      px.getInnerText("#submit-msg");
      px.close();
    } finally {
      if (px != null) {
        px.closeChannel();
      }
    }
  }
}
