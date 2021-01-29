import { shallowMount } from '@vue/test-utils';
import Planets from '@/components/views/Planets';
import BCardPagination from '@/components/organisms/BCardPagination';
import BLoading from '@/components/atoms/BLoading';
import BError from '@/components/atoms/BError';

describe('Planets', () => {
  it('renders loading if fetching', () => {
    const wrapper = shallowMount(Planets);

    expect(wrapper.findComponent(BLoading).exists()).toBe(wrapper.vm.fetching);
  });

  it('renders error if not loading', () => {
    const wrapper = shallowMount(Planets);

    expect(wrapper.findComponent(BError).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });

  it('renders b pagination if no error and no fetching', () => {
    const wrapper = shallowMount(Planets);

    expect(wrapper.findComponent(BCardPagination).exists()).toBe(
      wrapper.vm.error === 'null' && !wrapper.vm.fetching
    );
  });
});
