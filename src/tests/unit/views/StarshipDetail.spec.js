import { shallowMount } from '@vue/test-utils';
import StarshipDetail from '@/components/views/StarshipDetail';
import BDetail from '@/components/molecules/BDetail';
import BLoading from '@/components/atoms/BLoading';
import BError from '@/components/atoms/BError';

describe('StarshipDetail', () => {
  it('renders loading if fetching', () => {
    const wrapper = shallowMount(StarshipDetail);

    expect(wrapper.findComponent(BLoading).exists()).toBe(wrapper.vm.fetching);
  });

  it('renders error if not loading', () => {
    const wrapper = shallowMount(StarshipDetail);

    expect(wrapper.findComponent(BError).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });

  it('renders b detail if no error and no fetching', () => {
    const wrapper = shallowMount(StarshipDetail);

    expect(wrapper.findComponent(BDetail).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });
});
