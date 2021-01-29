import { shallowMount } from '@vue/test-utils';
import BCardPagination from '@/components/organisms/BCardPagination';
import BFilter from '@/components/molecules/BFilter';
import BCard from '@/components/molecules/BCard';
import BButton from '@/components/atoms/BButton';

const factory = props =>
  shallowMount(BCardPagination, {
    props: props,
  });

const defaultProps = {
  records: 3,
  perPage: 2,
  data: [
    { name: 'Name', url: '0/1/2/3/4/5' },
    { name: 'Name1', url: '0/1/2/3/4/51' },
    { name: 'Name2', url: '0/1/2/3/4/52' },
  ],
  handleClickCard: () => {},
};

describe('BCardPagination', () => {
  it('Renders filter', () => {
    const wrapper = factory(defaultProps);

    expect(wrapper.findComponent(BFilter).exists()).toBe(true);
  });

  it(`Renders div with class 'card' if items.length is 0 or less`, () => {
    const wrapper = factory(defaultProps);

    expect(wrapper.findComponent('.card').exists()).toBe(
      wrapper.vm.items.length <= 0
    );
  });

  it('Renders cards according to items length and button according to totalPages', () => {
    const wrapper = factory(defaultProps);

    expect(wrapper.findAllComponents(BCard)).toHaveLength(
      wrapper.vm.items.length
    );
    expect(wrapper.findAllComponents(BButton)).toHaveLength(
      wrapper.vm.totalPages
    );
  });

  it('Click on page btn should change currentPage to given id and slice data', () => {
    const wrapper = factory(defaultProps);

    wrapper.vm.handleClickButton('2');

    expect(wrapper.vm.currentPage).toBe(2);
    expect(wrapper.vm.items.length).not.toBe(0);
  });

  it('Handle filter', () => {
    const wrapper = factory(defaultProps);

    wrapper.vm.handleFilter('1');
    expect(wrapper.vm.filtered).toStrictEqual([wrapper.props().data[1]]);
    expect(wrapper.vm.currentPage).toBe(1);
  });
});
