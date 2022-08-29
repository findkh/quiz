/*
자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어다.
1. 객체지향 프로그래밍
    다양한 속성 중에서 프로그램에 필요한 속성만 간추려 표현하는 것을 추상화(abstract)라 한다.
    속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라하며, 
    객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.
    또한 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.
    이때 객체의 상태 데이터를 프로퍼티, 동작을 메서드라 부른다.
2. 상속(inheritance)과 프로토타입
    상속은 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
    프로토타입을 기반으로 상속을 구현하며 기존의 코드를 재사용하여 불필요한 중복을 제거한다.
    자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
3. 프로토타입 객체
    객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다. 
    프로토타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
    프로토타입을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.
    객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.
3-1. __proto__ 접근자 프로퍼티
    - __proto__는 접근자 프로터피다.
        모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.
    - __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
        객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다. 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.
    - __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
        상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.
        순환 참조하는 프로토타입 체인이 만들어지면 프로토타입 체인 종점이 존재하지 않기 때문에 무한루프에 빠진다.
    - __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
        ES6에서 표준으로 채택되었지만 코드내에서 __proto__접근자 프로퍼티를 직접 사용하는 것은 권장하지 않는다.
        모든 객체가 사용할 수 있는 것은 아니기 때문이다.
3-2. 함수 객체의 prototype 프로퍼티
    함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
    생성자 함수로서 호출할 수 없는 함수(non-constructor)인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.
    생성자 함수로 호출하기 위해 정의하지 않은 일반함수도 prototype 프로퍼티를 소유하지만 객체를 생성하지 않는 일반 함수의 prototype 프로퍼티는 아무런 의미가 없다.
    모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
    프로퍼티를 사용하는 주체가 다르다.
3-3. 프로토타입의 constructor 프로퍼티와 생성자 함수
    모든 프로토타입은 constructor 프로퍼티를 갖는다. 이 consrtructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
    이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이루어진다.
4-4. 리터럴 표기법(객체 리터럴, 함수 리터럴, 배열 리터럴, 정규 표현식 리터럴 등)에 의해 생성된 객체의 생성자 함수와 프로토타입
    리터럴 표기법에 의한 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 방식도 있다.
    리터럴 표기법에 의해 생성된 객체는 생성자 함수에 의해 생성된 객체는 아니지만 큰 틀에서 생각해보면 리터럴 표기법으로 생성한 객체도 생성자 함수로 생성한 객체와 본질적인 면에서 큰 차이는 없다.
    따라서 프로토타입의 constructor 프로퍼티를 통해 연결되어 있는 생성자 함수를 리터럴 표기법으로 생성한 객체를 생성한 생성자 함수로 생각해도 크게 무리없다.
5. 프로토타입의 생성 시점
    프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다. 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재하기 때문이다.
5-1. 사용자 정의 생성자 함수와 프로토타입 생성 시점
    생성자 함수로서 호출할 수 있는 함수(constructor)는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
    생성자 함수로서 호출할 수 없는 함수(non-constructor)는 프로토타입이 생성되지 않는다.
5-2. 빌트인 생성자 함수와 프로토타입 생성 시점
    Object, String, Number, Function, Array, RegExp, Date, Promise 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다.
    모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성되고 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩된다.
6. 객체 생성 방식과 프로토타입의 결정
    객체는 생성 방법
    객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스(ES6)
    위와 같은 방법으로 생성된 객체는 각 방식마다 세부적인 객체 생성 방식의 차이는 있으나 추상 연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다.
    프로토타입은 추상 연산 OrdinaryobjectCreate에 전달되는 인수에 의해 결정된다. 이 인수는 객체가 생성되는 시점에 객체 생성방식에 의해 결정된다.
6-1. 객체 리터럴에 의해 생성된 객체의 프로토타입
    자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상 연산 OrdinaryObjectCreate를 호출한다. 이때 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
    OrdinaryObjectCreate에 의해 Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결이 만들어진다.    
    객체 리터럴 내부에 프로퍼티를 추가한다.
6-2. Object 생성자 함수에 의해 생성된 객체의 프로토타입
    Object 생성자 함수를 인수 없이 호출하면 빈 객체가 생성된다.
    Object 생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 OrdinaryObjectCreat가 호출된다. 이때 전달되는 프로토타입은 Object.prototype이다.
    빈 객체를 생성한 이후 프로퍼티를 추가해야 한다.
6-3. 생성자 함수에 의해 생성된 객체의 프로토타입
    new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하면 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
    이때 추상 연산 OrdinaryObjectCreate를에 전달되는 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.
7. 프로토타입 체인
    자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
    이를 프로토타입 체인이라 한다.
    프로토타입 체인은 자바스크립트가 객체 지향 프로그래밍의 상속을 구현하는 메커니즘이다.
    Object.prototype을 프로토타입 체인의 종점이라 한다.
    자바스크립트 엔진은 객체 간의 상속 관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검색한다. 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘이다.
    프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다. 스코프 체인은 식별자 검색을 위한 메커니즘이다.
8. 오버라이딩
    프로토타입이 소유한 프로퍼티를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라 한다.
    프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다.(오버라이딩)
    상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉(property shadowing)이라 한다.
    하위 객체를 통해 프로토타입에 get 액세스는 허용하나 set 액세스는 허용되지 않는다.
9. 프로토타입의 교체
    프로토타입은 임의의 다른 객체로 변경할 수 있다. 객체 간의 상속 관계를 동적으로 변경할 수 있다.
    프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.
9-1. 생성자 함수에 의한 프로토타입의 교체
    프로토타입으로 교체한 객체 리터럴에는 constructor 프로퍼티가 없다. 그래서 검색하면 Object가 나온다.
    프로토타입으로 교체한 객체 리터럴에 constructor를 추가하면 프로토타입의 constructor 프로퍼티를 되살릴 수 있다.
9-2. 인스턴스에 의한 프로토타입의 교체
    프로토타입은 인스턴스의 __proto__접근자 프로퍼티를 통해 접근할 수 있다. 
    생성자 함수의 prototype 프로퍼티에 다른 임의의 객체를 바인딩하는 것은 미래에 생성할 인스턴스의 프로토타입을 교체하는 것이다.
    __proto__ 접근자 프로퍼티를 통해 프로토타입을 교체하는 것은 이미 생성된 객체의 프로토타입을 교체하는 것이다.
10. instanceof 연산자
    instaceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다. 
    우변의 피연산자가 함수가 아닌 경우 TypeError가 발생한다.
    instaceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하지는지 확인한다.
11. 직접 상속
11-1. Object.create에 의한 직접 상속
    Object.create 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다. 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate를 호출한다.
    첫번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다.(객체를 생성하면서 직접적으로 상속을 구현)
    두번째 매개변수에는 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체를 전달한다.(옵션)
    장점
        - new 연산자가 없이도 객체를 생성할 수 있다.
        - 프로토타입을 지정하면서 객체를 생성할 수 있다.
        - 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다.
    하지만 권장하지 않는다.
    Object.create 메서드를 통해 프로토타입 체인의 종점에 위치하는 객체를 생성할 수 있기 때문이다.
12. 정적 프로퍼티/메서드
    정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.
    인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스로 접근 할 수 없다.
13. 프로퍼티 존재 확인
13-1. in 연산자
    in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다. 
    ex) key in object
    key : 프로퍼티 키를 나타내는 문자열
    object : 객체로 평가되는 표현식
    ES6에 도입된 Reflect.has 메서드도 동일하게 동작한다.
13-2. Object.prototype.hasOwnProperty 메서드
    객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.
    인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
14. 프로퍼티 열거
14-1. for...in 문
    객체의 모든 프로퍼티를 순회하며 열거하려면 for..in 문을 사용한다.
    for...in문은 객체의 프로퍼티 개수만큼 순회하며 for...in 문의 변수 선언문에서 선언한 변수에 프로퍼티 키를 할당한다.
    in 연산자처럼 순회 대상 객체의 프로퍼티뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다. Object.prototype의 프로퍼티는 열거되지 않는다.
    객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트[[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.
    프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
    순서를 보장하지 않는다.
    for in문 보다는 for문이나 for of 또는 forEach 메서드를 사용하기를 권장한다.
14-2. Object.keys/values/entries 메서드
    객체 자신의 고유 프로퍼티만 열거하기 위해서는 for...in문보다 Object.keys/values/entries 메서드를 사용하는 것을 권장한다.
    Obejct.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
    Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
    Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
*/

//---------------------상속 구현-----------------------------
//생성자 함수
function Circle(radius) {
    this.radius = radius;
};

//Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입 추가
//프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다.
Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

//인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //true

console.log(circle1.getArea()); //3.141592653589793
console.log(circle2.getArea()); //12.566370614359172
//---------------------상속 구현-----------------------------

//---------------------함수 객체의 prototype 프로퍼티-----------------------------
//생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Park');

console.log(Person.prototype === me.__proto__); //true
//-> 동일한 객체다.
//---------------------함수 객체의 prototype 프로퍼티-----------------------------

//---------------------프로토타입의 constructor 프로퍼티와 생성자 함수-----------------------------
console.log(me.constructor === Person); //true
//me 객체의 생성자 함수는 Person이다.
//---------------------프로토타입의 constructor 프로퍼티와 생성자 함수-----------------------------

//---------------------instaceof 연산자-----------------------------
const me2 = new Person('lee');

console.log(me2 instanceof Person); //true

console.log(me2 instanceof Object); //true

//---------------------in 연산자-----------------------------
const person2 = {
    name: 'sudal',
    address : 'seoul'
};

console.log('name' in person2); //true
console.log('address' in person2); //true
console.log('age' in person2); //false

//---------------------Reflect.has 연산자-----------------------------
console.log(Reflect.has(person2, 'name')); //true
console.log(Reflect.has(person2, 'toString')); //true

//---------------------Object.prototype.hasOwnProperty----------------
console.log(person2.hasOwnProperty('name')); //true
console.log(person2.hasOwnProperty('toString')); //false

//---------------------for ... in----------------
const person3 = {
    name : 'lee',
    address : 'seoul',
    __proto__ :  {age : 20}
};

for (const key in person3) {
    console.log(key, person3[key])
};

//---------------------Object.keys/values/entries------------------------------
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));