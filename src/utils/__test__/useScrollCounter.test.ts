import { act, fireEvent, renderHook } from '@testing-library/react';

import { useScrollCounter } from 'utils/hooks/scroll/useScrollCounter';

describe('useScrollCounter', () => {
  it('Should return initial scroll value as 0', () => {
    const { result } = renderHook(() => useScrollCounter());

    expect(result.current).toBe(0);
  });

  it('Should update scroll value when window scrolls', () => {
    const { result } = renderHook(() => useScrollCounter());

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });

    expect(result.current).toBe(100);
  });
});
