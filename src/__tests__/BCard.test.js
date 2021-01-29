import { mount } from '@vue/test-utils';
import BCard from '@/components/molecules/BCard';
import BButton from '@/components/atoms/BButton';

const factory = props =>
  mount(BCard, {
    props: props,
  });

describe('BCard', () => {
  it('Renders a button with given prop title', () => {
    const wrapper = factory({
      title: 'Name',
      id: '1',
      handleClick: jest.fn(),
    });

    const button = wrapper.findComponent(BButton);
    expect(button.exists()).toBe(true);
    expect(wrapper.html()).toContain('Name');
  });

  it('Fires function on click', () => {
    const wrapper = factory({
      title: 'Name',
      id: '1',
      handleClick: jest.fn(),
    });

    jest.spyOn(wrapper.props(), 'handleClick');
    const button = wrapper.findComponent(BButton);
    button.trigger('click');
    expect(wrapper.props().handleClick).toHaveBeenCalled();
  });
});
