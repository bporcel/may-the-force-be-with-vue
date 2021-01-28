import { shallowMount } from '@vue/test-utils';
import BNavigation from '@/components/app/BNavigation';
import router from '@/router/index';

describe('BNavigation', () => {
  it('Renders navigation buttons according to data.length', () => {
    const wrapper = shallowMount(BNavigation);

    expect(wrapper.findAll('button')).toHaveLength(wrapper.vm.data.length);
  });
});
