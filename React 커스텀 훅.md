
커스텀 훅(Custom Hook)은 **React에서 특정 로직을 재사용하기 위해 만든 함수**야!

---

## 📌 커스텀 훅을 만드는 이유

1. **코드 중복 제거** → 같은 로직을 여러 컴포넌트에서 사용해야 할 때, 한 곳에 모아놓고 재사용할 수 있음.
2. **상태 관리 로직을 깔끔하게 정리** → 컴포넌트 내부가 너무 길어지지 않도록 분리할 수 있음.
3. **가독성 향상** → 역할별로 로직을 분리하면 코드가 읽기 쉬워짐.

---

## 📌 예제: `useSelectedSchedulesStore`

우리가 아까 본 `useSelectedSchedulesStore`도 커스텀 훅이야! 이 훅의 목적은 **스케줄 선택 상태를 쉽게 관리할 수 있도록 도와주는 것**이야.

### ✅ 이 훅을 안 쓰고 직접 관리하면?

```tsx
import { atom, useAtom } from "jotai";

const selectedScheduleIdsAtom = atom<number[]>([]);

function ScheduleComponent() {
  const [selectedScheduleIds, setSelectedScheduleIds] = useAtom(selectedScheduleIdsAtom);

  const clearSelectedSchedules = () => {
    setSelectedScheduleIds([]); // 선택 목록 초기화
  };

  return (
    <div>
      <p>선택된 개수: {selectedScheduleIds.length}</p>
      <button onClick={clearSelectedSchedules}>초기화</button>
    </div>
  );
}
```

✔ **문제점**: `selectedScheduleIdsAtom`을 매번 `useAtom`으로 가져와야 하고, `clearSelectedSchedules` 같은 공통 로직을 반복해서 작성해야 함.

---

### ✅ 커스텀 훅으로 개선하면?

```tsx
import { atom, useAtom } from "jotai";

// 상태 정의 (전역 상태)
const selectedScheduleIdsAtom = atom<number[]>([]);

// 📌 커스텀 훅 생성
export function useSelectedSchedulesStore() {
  const [selectedScheduleIds, setSelectedScheduleIds] = useAtom(selectedScheduleIdsAtom);

  // 공통 로직을 훅 내부에서 관리
  const clearSelectedSchedules = () => {
    setSelectedScheduleIds([]);
  };

  return {
    selectedScheduleIds, // 현재 선택된 목록
    setSelectedScheduleIds, // 목록을 변경하는 함수
    clearSelectedSchedules, // 목록 초기화 함수
  };
}
```

---

### ✅ 커스텀 훅을 사용하면?

```tsx
import { useSelectedSchedulesStore } from "./useSelectedSchedulesStore";

function ScheduleComponent() {
  // 커스텀 훅을 사용해서 상태 가져오기
  const { selectedScheduleIds, clearSelectedSchedules } = useSelectedSchedulesStore();

  return (
    <div>
      <p>선택된 개수: {selectedScheduleIds.length}</p>
      <button onClick={clearSelectedSchedules}>초기화</button>
    </div>
  );
}
```

✔ **이점**:

- `useSelectedSchedulesStore`만 호출하면 **자동으로 상태를 관리**할 수 있음.
- `clearSelectedSchedules` 같은 로직을 여러 곳에서 재사용 가능.
- 코드가 짧아지고 가독성이 좋아짐.

---

## 📌 결론: 커스텀 훅이 필요한 이유

4. **복잡한 상태 관리 로직을 컴포넌트에서 분리**할 수 있음.
5. **여러 컴포넌트에서 재사용할 수 있는 기능**을 한 곳에 모아서 관리할 수 있음.
6. **코드를 깔끔하게 유지**하고, 유지보수하기 쉽게 만듦.

	**🎯 즉, 커스텀 훅은 "반복되는 로직을 하나의 함수로 만들어서 편하게 쓰자"라는 개념이야!** 🚀