import HelloWorld from '@/components/HelloWorld'
import { mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    let wrapper = mount(HelloWorld)
    expect(wrapper.find('img').exists()).toBe(true);
  })
})
