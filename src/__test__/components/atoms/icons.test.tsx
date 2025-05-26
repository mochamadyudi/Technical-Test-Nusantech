import {describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icons } from '../../../components/atoms/Icons.tsx';

describe("[component][atoms]: Icons", () => {
  test("[icons][exist]: should render the correct icon if it exists in @ant-design/icons", () => {
    const { container } = render(<Icons type="HomeOutlined" data-testid="icon"/>);
    const iconElement = container.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  })
  test("[icons][not-exist]: Should not render anything if the icon types doesn't exist", () => {
    const { container } = render(<Icons type="NonExistentIcon"/>)
    expect(container.firstChild).toBeNull();
  })
  test("[icons][forwarded] Should forward props to the rendered icon", () => {
    render(<Icons type="SmileOutlined" data-testid="icon" className="my-classes"/>)
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass('my-classes');
  })
  test("[icons][falsy] Should handle falsy icon type gracefully", () => {
    const { container } = render(<Icons type=""/>);
    expect(container.firstChild).toBeNull();
  })
  test("[icons][undefined]: Should handle undefined icon type gracefully", () => {
    const { container } = render(<Icons type={undefined as any}/>);
    expect(container.firstChild).toBeNull();
  })
})
