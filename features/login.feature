Feature: Login Flow

    Background:
        Given I am on the login page

    Scenario: As a user, I can't login when the password is empty
        When I input email as "<email>" and password as "<password>"
        And I click on button login
        Then I must remain on login page displaying a message

        Examples:
            |   email             |   password    |
            |   abcd@gmail.com    |               |

    Scenario: As a user, I can successfully login in kasir aja
        When I input email as "<email>" and password as "<password>"
        And I click on button login
        Then I must navigate to dashboard page

        Examples:
            |   email             |   password        |
            |   abcd@gmail.com    |   12345678    |