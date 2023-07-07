Feature: Create Category Flow

    Background:
        Given I am on the admin dashboard

    Scenario: As a user, I can create a category with valid data
        When I click on the "kategori" menu item
        And I click on the "tambah" button on the category page
        And I input nama as "<nama>" and deskripsi as "<deskripsi>"
        And I click on the "simpan" button
        Then I should see a success alert

        Examples:
            |   nama                        |   deskripsi                           |
            |   Test Category Cucumber      |   Test Category Description Cucumber  |

    Scenario: As a user, I cannot create a category with an empty name
        When I click on the "kategori" menu item
        And I click on the "tambah" button on the category page
        And I input nama as "<nama>" and deskripsi as "<deskripsi>"
        And I click on the "simpan" button
        Then I should see an error message for the "nama" field

        Examples:
            |   nama         |   deskripsi                           |
            |                |   Test Category Description Cucumber  |
