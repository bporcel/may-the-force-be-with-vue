import { shallowMount } from '@vue/test-utils';
import BFilter from '@/components/app/BFilter';

const factory = props =>
  shallowMount(BFilter, {
    props: props,
  });

describe('BFilter', () => {
  it('Renders an input', () => {
    const wrapper = factory({ handleFilter: jest.fn });
    const input = wrapper.findComponent('input')
    expect(input.exists()).toBe(true)
  });
});
