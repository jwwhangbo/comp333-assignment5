import unit_testing_sample_code as UnitTest
import os
def Test (testF, input, ans):
    size = os.get_terminal_size()
    for test_num in range(len(input)):
        print_string = f"test {test_num}: input: {input[test_num]}, expected output: {ans[test_num]}, outputted: {testF(input[test_num])}"
        print(print_string, end='')
        if (testF(input[test_num]) == ans[test_num]):
            num_dots = size.columns - len(print_string) - len("success")
            if num_dots <= 0:
                num_dots = 0
            print('.'*num_dots + "success")
        else:
            num_dots = size.columns - len(print_string) - len("fail")
            if num_dots <= 0:
                num_dots = 0
            print('.'*num_dots + "fail")

def ListTest (testF, input, ans): 
    size = os.get_terminal_size()
    for test_num in range(len(input)):
        print(f"test {test_num}:")
        output = testF(input[test_num])
        for out_num in range(len(output)):
            print_string = f"part {out_num}: expected: {ans[test_num][out_num]}, output: {output[out_num]}"
            print(print_string, end='')
            if (ans[test_num][out_num] == output[out_num]):
                num_dots = size.columns - len(print_string) - len("success")
                if num_dots <= 0:  
                    num_dots = 0
                print('.'*num_dots + "success")
            else:
                num_dots = size.columns - len(print_string) - len("fail")
                if num_dots <= 0:  
                    num_dots = 0
                print('.'*num_dots + "fail")
                

def main():
    Test(UnitTest.string_capitalizer, ["one","c",4,""], ["OnE", "C", "FouR",""])
    ListTest(UnitTest.capitalize_list, [["one","c",4,""]], [["OnE", "C", "FouR",""]])
    Test(UnitTest.integer_manipulator, [10, 2, 3, 0, 'three'], [66, 2, 6, 0, 1])
    ListTest(UnitTest.manipulate_list, [[10, 2, 3, 0, 'three']], [[66, 2, 6, 0, 1]])
    # TODO: Add more tests

if __name__ == "__main__":
    main()