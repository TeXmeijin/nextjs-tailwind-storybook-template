import Downshift from "downshift";
import clsx from "clsx";

type Props<T extends {id: number|string} & Record<string, any>> = {
  items: T[],
  itemToString: (arg: T) => string
  placeholder: string
}

type Component = {
  <T extends {id: number|string} & Record<string, any>>(props: Props<T>): JSX.Element
}

export const AutoCompleteSelect: Component = ({items, itemToString, placeholder}) => {
  return (
    <Downshift
      onChange={(selection) =>
        alert(
          selection
            ? `You selected ${(itemToString)(selection)}`
            : 'selection cleared',
        )
      }
      itemToString={((item) => item ? itemToString(item) : '')}
    >
      {({
          getLabelProps,
          getInputProps,
          getToggleButtonProps,
          getMenuProps,
          getItemProps,
          isOpen,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex,
        }) => (
        <div>
          <label {...getLabelProps()}>Find a Star Wars character</label>
          <div className={'relative w-full'}>
            <input
              className={'p-1 p-2 rounded border w-full block'}
              {...getInputProps({
                isOpen,
                placeholder,
              })}
            />
          </div>
          <div className={'relative'}>
            <ul className={
              clsx('absolute mt-0 p-0 w-full max-h-60 overflow-y-auto overflow-x-hidden outline-0 rounded shadow', isOpen && 'border-primary-100 border')
            } {...getMenuProps({open: isOpen})}>
              {isOpen
                ? items.map((item, index) => (
                  <div
                    key={item.id}
                    {...getItemProps({
                      item,
                      index,
                      // isActive: highlightedIndex === index,
                      isSelected: selectedItem === item,
                    })}
                  >
                    {(itemToString)(item)}
                  </div>
                ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  )
}
