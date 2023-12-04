import sys
sys.path.append('../question1')
import unit_testing_sample_code as UnitTest

def test_string_capitalizer():
    input_data = ["two", "C", "4", ""]
    expected_output = ["TwO", "C", "FouR", ""]
    for test_num in range(len(input_data)):
        input_ans = UnitTest.string_capitalizer(input_data[test_num])
        assert input_ans == expected_output[test_num], f"Test {test_num} failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Test {test_num} passed! {input_ans} matches {expected_output[test_num]}.")

def test_capitalize_list():
    input_data = ["TwO", "C", "4", ""]
    expected_output = ["TwO", "C", "FouR", ""]
    output = UnitTest.capitalize_list(input_data)
    print("Test 0:")
    for test_num in range(len(input_data)):
        input_ans = output[test_num]
        assert input_ans == expected_output[test_num], f"Part {test_num} in test 0 failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Part {test_num} in test 0 passed! {input_ans} matches {expected_output[test_num]}.")

def test_integer_manipulator():
    input_data = ["66", "2", "6", "0", "three"]
    expected_output = ["66", "2", "6", "0", "1"]
    for test_num in range(len(input_data)):
        input_ans = UnitTest.integer_manipulator(input_data[test_num])
        assert input_ans == expected_output[test_num], f"Test {test_num} failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Test {test_num} passed! {input_ans} matches {expected_output[test_num]}.")

def test_manipulate_list():
    input_data = ["66", "2", "6", "0", 'three']
    expected_output = ["66", "2", "6", "0", '1']
    output = UnitTest.manipulate_list(input_data)
    print("Test 0:")
    for test_num in range(len(input_data)):
        input_ans = output[test_num]
        assert input_ans == expected_output[test_num], f"Part {test_num} in test 0 failed! Expected: {expected_output[test_num]}. Got: {input_ans}."
        print(f"Part {test_num} in test 0 passed! {input_ans} matches {expected_output[test_num]}.")

