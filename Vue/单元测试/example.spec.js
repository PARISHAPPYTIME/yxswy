import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import JestTest from '@/components/JestTest.vue'

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// describe 测试套件 表示一组相关的测试。
// 他是一个函数
// 第一个参数是测试套件的名称
// 第二个参数是实际执行的函数，分组让测试用例代码结构化，易于维护

// it 块称为“测试用例”，表示一个单独的测试，是测试的最小单位

// expect是断言，它接受一个参数就是运行测试内容的结果，返回一个对象，
// 这个对象来调用匹配器(toBe) ，匹配器的参数就是我们的预期结果，
// 这样就可以对结果和预期进行对比了，也就可以判断对不对了，比如expect(1+1).toBe(2)。

// Vue 组件单元测试的一般思路：渲染这个组件，然后断言这些标签是否匹配组件的状态。
/** demo
describe("JestTest.vue", () => {
  it("start test JestTest", () => {
    const name = "烟熏三文鱼";
    const wrapper = shallowMount(JestTest, {
       propsData: { name }
    });
    expect(wrapper.text()).toMatch(name)
  });
});
*/

const msg = 'submit'
const factory = (propsData) => {
  return shallowMount(JestTest, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('does not have admin privileges', () => {
  it('renders a message', () => {
    const wrapper = factory()
    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe('submit')
  })
})

describe('has admin privileges', () => {
  it('renders a message', () => {
    const wrapper = factory({ isAdmin: true })
    expect(wrapper.find('span').text()).toBe('Admin Privileges')
    expect(wrapper.find('button').text()).toBe('submit')
  })
})

/**
 describe("FormSubmitter", () => {
   it("reveals a notification when submitted", async () => {
     //安排
     const wrapper = shallowMount(FormSubmitter)

     //行动
     wrapper.find("[data-username]").setValue("alice")
     wrapper.find("form").trigger("submit.prevent")
     await wrapper.vm.$nextTick()

     //断言
     expect(wrapper.find(".message").text())
       .toBe("Thank you for your submission, alice.")
   })
 })
 */
