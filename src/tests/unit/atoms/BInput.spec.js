import { shallowMount } from '@vue/test-utils';
import BInput from '@/components/atoms/BInput';

describe('BInput', () => {
  it('it renders an input', () => {
    const wrapper = shallowMount(BInput);
    expect(wrapper.findAll('input')).toHaveLength(1);
  });
});
