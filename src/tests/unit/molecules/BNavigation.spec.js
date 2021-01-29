import { shallowMount } from '@vue/test-utils';
import BNavigation from '@/components/molecules/BNavigation';
import BButton from '@/components/atoms/BButton';

describe('BNavigation', () => {
  it('Renders navigation buttons according to data.length', () => {
    BNavigation.created = function() {
      this.handleNavigation = jest.fn();
      this.data = ['/'];
    };
    const wrapper = shallowMount(BNavigation);

    expect(wrapper.findAllComponents(BButton)).toHaveLength(
      wrapper.vm.data.length
    );
    delete BNavigation.created;
  });

  it('fires handleNavigation on click', () => {
    BNavigation.created = function() {
      this.handleNavigation = jest.fn();
      this.data = ['/'];
    };

    const wrapper = shallowMount(BNavigation);
    wrapper.findComponent(BButton).trigger('click');
    expect(wrapper.vm.handleNavigation).toHaveBeenCalled();
    delete BNavigation.created;
  });
});
