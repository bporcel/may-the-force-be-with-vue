import { shallowMount } from '@vue/test-utils';
import BError from '@/components/atoms/BError';

describe('BError', () => {
  it('it renders renders p element', () => {
    const wrapper = shallowMount(BError);
    expect(wrapper.findAll('p')).toHaveLength(1);
  });
});
