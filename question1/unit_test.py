import unit_testing_sample_code as UnitTest

def Test (testF, input, ans):
    for test_num in range(len(input)):
        print(f"test {test_num}: output: {input[test_num]}, expected output: {ans[test_num]}")
        if (testF(input[test_num]) == ans[test_num]):
            print("success")
        else:
            print("fail")

def ListTest (testF, input, ans): 
    for test_num in range(len(input)):
        print(f"test {test_num}")
        output = testF(input[test_num])
        for out_num in range(len(output)):
            

def main():
    Test(UnitTest.string_capitalizer, ["one","two","three"], ["OnE", "TwO", "ThreE"])
    # TODO: Add more tests

if __name__ == "__main__":
    main()