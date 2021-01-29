import { shallowMount } from '@vue/test-utils';
import BFilter from '@/components/molecules/BFilter';
import BInput from '@/components/atoms/BInput';

const factory = props =>
  shallowMount(BFilter, {
    props: props,
  });

describe('BFilter', () => {
  it('Renders an input', () => {
    const wrapper = factory({ handleFilter: jest.fn });
    const input = wrapper.findComponent(BInput);
    expect(input.exists()).toBe(true);
  });
});
