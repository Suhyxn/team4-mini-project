개발은 develop branch 에서 진행해주세요!

## button을 이용한 radio버튼 사용방법

```js
import Button from './components/common/Button'
import { gender } from './constants/buttonData'

function Example() {
  const [active, setActive] = useState()

  const activeHandler = (index) => {
    setActive(index)
  }

  return (
    <div className="d-flex gap-1">
      {gender.map((item, index) => (
        <div key={index} className="w-100">
          <Button
            active={`${active}` == index ? 'active' : ''}
            size="radio"
            onClick={() => activeHandler(index)}
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  )
}
```
