import { shallowMount } from '@vue/test-utils';
import BButton from '@/components/atoms/BButton';

describe('BButton', () => {
  it('it renders a button', () => {
    const wrapper = shallowMount(BButton);
    expect(wrapper.findAll('button')).toHaveLength(1);
  });
});
