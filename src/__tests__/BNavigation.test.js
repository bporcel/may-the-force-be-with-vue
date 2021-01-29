import { shallowMount } from '@vue/test-utils';
import BNavigation from '@/components/molecules/BNavigation';

describe('BNavigation', () => {
  it('Renders navigation buttons according to data.length', () => {
    const wrapper = shallowMount(BNavigation);

    expect(wrapper.findAll('button')).toHaveLength(wrapper.vm.data.length);
  });
});
