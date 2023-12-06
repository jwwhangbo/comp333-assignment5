## Question 6

A model can be trained to identify html codes that correspond to input, buttons, and other interactable elements.
Finding html tags that render input fields, buttons can be done without ML and can be done by simply parsing the html code. 
The model should be trained to identify patterns in the context of which these components are used in the html code.
For example, if a button tag contains the text 'sign in', the model should recognize it as a button that sends user data to the backend.
The goal is to ask a model, in human language, to test a certain aspect of a website and be able to receive a test code for that aspect.