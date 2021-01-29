import { shallowMount } from '@vue/test-utils';
import BFilter from '@/components/molecules/BFilter';
import BInput from '@/components/atoms/BInput';

const factory = props =>
  shallowMount(BFilter, {
    props: props,
  });

describe('BFilter', () => {
  it('Renders an input', () => {
    const wrapper = factory({ handleFilter: jest.fn() });
    expect(wrapper.findAllComponents(BInput)).toHaveLength(1);
  });

  it('Fires function on input event', () => {
    const wrapper = factory({ handleFilter: jest.fn() });

    jest.spyOn(wrapper.props(), 'handleFilter');
    const input = wrapper.findComponent(BInput);
    input.trigger('input');

    expect(wrapper.props().handleFilter).toHaveBeenCalled();
  });
});
