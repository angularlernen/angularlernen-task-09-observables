Observables
===========

### Introduction

In Angular (and JavaScript in general) we live in a reactive, asyncronous world.

RxJs Observables are Angulars way to deal with this async issue.

### Task

Change the signature of the `findAll()` methods on the _EventResource_ and _ProfileResource_ injectables.

The result type should be `Observable<EventResponse[]>` respectively `Observable<ProfileResponse[]>`.

Use the `of` function to create an Observable of the hardcoded array.

- https://rxjs.dev/api/index/function/of
- https://www.learnrxjs.io/operators/creation/of.html
