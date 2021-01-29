import { shallowMount } from '@vue/test-utils';
import Starships from '@/components/views/Starships';
import BCardPagination from '@/components/organisms/BCardPagination';
import BLoading from '@/components/atoms/BLoading';
import BError from '@/components/atoms/BError';

describe('Starships', () => {
  it('renders loading if fetching', () => {
    const wrapper = shallowMount(Starships);

    expect(wrapper.findComponent(BLoading).exists()).toBe(wrapper.vm.fetching);
  });

  it('renders error if not loading', () => {
    const wrapper = shallowMount(Starships);

    expect(wrapper.findComponent(BError).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });

  it('renders b pagination if no error and no fetching', () => {
    const wrapper = shallowMount(Starships);

    expect(wrapper.findComponent(BCardPagination).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });
});
