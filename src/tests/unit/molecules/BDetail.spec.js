import { shallowMount } from '@vue/test-utils';
import BDetail from '@/components/molecules/BDetail';

const factory = props =>
  shallowMount(BDetail, {
    props: props,
  });

describe('BDetail', () => {
  it('Renders p for each item in props.data', () => {
    const items = [{ text: 'Text', data: 'Data' }];
    const wrapper = factory({ data: items });
    expect(wrapper.findAll('p')).toHaveLength(items.length);
  });
});
