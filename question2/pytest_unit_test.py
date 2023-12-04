import sys
sys.path.append('../question1')
import unit_testing_sample_code as UnitTest

def list_test(input_data, testF, expected_output):
    output = testF(input_data)
    for test_num in range(len(input_data)):
        input_ans = output[test_num]
        assert input_ans == expected_output[test_num], f"Part {test_num} in test 0 failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Part {test_num} in test 0 passed! {input_ans} matches {expected_output[test_num]}.")

def non_list_test(input_data, expected_output, testF):
    for test_num in range(len(input_data)):
        input_ans = testF(input_data[test_num])
        assert input_ans == expected_output[test_num], f"Test {test_num} failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Test {test_num} passed! {input_ans} matches {expected_output[test_num]}.")

def test_string_capitalizer():
    input_data = ["two", "C", "4", ""]
    expected_output = ["TwO", "C", "FouR", ""]
    non_list_test(input_data, expected_output, UnitTest.string_capitalizer)

def test_capitalize_list():
    input_data = ["TwO", "C", "4", ""]
    expected_output = ["TwO", "C", "FouR", ""]
    list_test(input_data, UnitTest.capitalize_list, expected_output)

def test_integer_manipulator():
    input_data = ["66", "2", "6", "0", "three"]
    expected_output = ["66", "2", "6", "0", "1"]
    non_list_test(input_data, expected_output, UnitTest.integer_manipulator)

def test_manipulate_list():
    input_data = ["66", "2", "6", "0", 'three']
    expected_output = ["66", "2", "6", "0", '1']
    list_test(input_data, UnitTest.manipulate_list, expected_output)


