import { fetchData } from "@/components/request.js";
import { chunk } from "@/components/Chunk.js";

test("should return data when fetchData request success", () => {
  return fetchData().then(res => {
    expect(res.data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    });
  });
});

/*test("should return err when fetchData request error", async () => {
  /!*expect.assertions(1); // 明确告诉jest, 在执行这个测试用例的时候，一定要做一次断言
  try {
    await fetchData();
  } catch (e) {
    expect(e).toBe("error");
  }*!/
  await expect(fetchData()).rejects.toBe('error');
});*/

describe("Test chunck", () => {
  it("chunk", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newArr = chunk(arr, 5);
    expect(newArr).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10]
    ]);
  });
});

const forEach = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        callback(element);
    }
}

test('should call callback when forEach', () => {
    const mockFun = jest.fn(); // mock 函数
    const array = [1, 2];

    forEach(array, mockFun); // 用mock函数代替真实的回调函数

    console.log(mockFun.mock);
    expect(mockFun.mock.calls.length).toBe(2)
})
