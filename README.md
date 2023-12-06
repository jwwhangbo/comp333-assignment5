# Comp333 Assignment5
## Problem 1
```
python3 unit_test.py
```
## Problem 2
  - To run locally, make sure that [Python](https://www.python.org/) is installed on your computer. With Python comes Pip.
      - To ensure Python and pip are properly installed run
      - `$ python --version` &
      - `$ pip --version`
      - If their version types are returned, you have properly installed pip and python, if not please install [Python](https://www.python.org/)
  - In your terminal, run `pip install pytest`
  - make your way into the question2 folder
  - In your terminal, run `pytest` 
## Problem 3
  - To run locally make sure you have [Composer](https://getcomposer.org/), [XAMPP](https://www.apachefriends.org/download.html).
  - Head to the test_project folder and install all of composer's dependencies by running `composer install` in your terminal, phpunit and guzzle will be installed.
  - In Xampp, start the Apache and MySQL servers.
  - Take the backend code that is in the folder backendCode and place this in your htdocs folder found in xampp. 
  - While in the test_project folder, run `php vendor/bin/phpunit tests` to run the tests. 
## Problem 4
run
```
npm test
```