import { shallowMount } from '@vue/test-utils';
import BCard from '@/components/shared/BCard';

const factory = props =>
  shallowMount(BCard, {
    props: props,
  });

describe('BCard', () => {
  it('Renders a button with given prop name', () => {
    const wrapper = factory({
      name: 'Name',
      id: '1',
      handleClick: jest.fn(),
    });

    const button = wrapper.findComponent('button')
    expect(button.exists()).toBe(true)
    expect(wrapper.html()).toContain('Name');
  });

  it('Fires function on click', () => {
    const wrapper = factory({
      name: 'Name',
      id: '1',
      handleClick: jest.fn(),
    });

    jest.spyOn(wrapper.props(), 'handleClick')
    const button = wrapper.findComponent('button');
    button.trigger('click')
    expect(wrapper.props().handleClick).toHaveBeenCalled()
  });
});
