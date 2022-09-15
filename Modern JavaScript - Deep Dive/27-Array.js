/*
배열
1. 배열이란?
    여러 개의 값을 순차적으로 나열한 자료구조다. 배열이 가지고 있는 값을 요소(element)라고 부른다. 모든 값은 배열의 요소가될 수 있다.
    배열의 요소는 배열에서 자신의 위치를 나타내는 0이상의 정수인 인덱스를 갖는다. 인덱스는 배열의 요소에 접근할 때 사용한다.
    요소에 접근할 때는 대괄호 표기법을 사용한다.
    배열의 길이를 나타내는 length 프로퍼티를 갖는다. 그렇게 때문에 for 문을 통해 순차적으로 요소에 접근할 수 있다.
2. 자바스크립트 배열은 배열이 아니다.
    자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다.
    배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열을 밀집배열(dense array)이라 한다.
    자바스크립트의 배열은 자료구조에서 말하는 일반적인 의미의 배열과 다르다.
    배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되고 연속적으로 이어져 있지 않을 수도 있다. 배열의 요소가 연속적으로 이어져 있지 않은 배열을 희소배열(sparse array)이라 한다.
    자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수 객체다.
        - 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.
        - 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적 단점이 있다.
          하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.
3. length 프로퍼티와 희소 배열
    length 프로퍼티는 요소의 개수 즉 배열의 길이를 나타내는 0 이상의 정수를 값으로 갖는다.
    length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
    length 프로퍼티 값보다 큰 숫자 값을 할당하는 경우 length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
*/

const arr = [1,2,3,4,5];
arr.length = 3;
//배열의 길이가 줄어든다.
console.log(arr); //[1, 2, 3]


const arr2 = [1];
arr2.length = 3;
console.log(arr2); //[ 1, <2 empty items> ]
