import { shallowMount } from '@vue/test-utils';
import BLoading from '@/components/atoms/BLoading';

describe('BLoading', () => {
  it('it renders renders p element', () => {
    const wrapper = shallowMount(BLoading);
    expect(wrapper.findAll('p')).toHaveLength(1);
  });
});
