(this["webpackJsonpreactive-task-presentation"]=this["webpackJsonpreactive-task-presentation"]||[]).push([[0],{130:function(e,A,n){},147:function(e,A){},464:function(e,A,n){"use strict";n.r(A);var t,c=n(0),i=n.n(c),r=n(25),s=n.n(r),d=(n(130),n(124)),l=n(3),j=n.p+"static/media/single-request.29e4977f.png",a=n.p+"static/media/single-request-reactive.cf33d896.png",b=n(2);!function(e){e.PIZZA="PIZZA",e.PASTA="PASTA"}(t||(t={}));var o=function(){var e=Object(c.useState)([]),A=Object(d.a)(e,2),n=A[0],i=A[1],r=function(){return fetch("http://localhost:8080/api/orders",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then(i)},s=n.map((function(e,A){return Object(b.jsxs)(l.i,{children:[e.item," ",e.payed?e.price:Object(b.jsx)(l.h,{onClick:function(){return function(e){var A=e.links.payment;fetch("http://localhost:8080".concat(A),{method:"POST",headers:{Accept:"application/json"}}).then((function(e){if(200!==e.status)throw new Error("failed to create order");r()}))}(e)},children:"Pay"})]},A)}));return Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.m,{children:Object(b.jsx)(l.e,{height:"100%",flexDirection:"column",children:Object(b.jsx)(l.f,{children:"Reactive Spring"})})}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Spring MVC Recap"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.c,{language:"java",children:'\n                        @RestController\n                        @RequestMapping("/api/orders")\n                        class OrderController {\n\n                            @GetMapping(produces = "application/json")\n                            public List<OrderDTO> getOrders() {\n                                return orderService.getOrders();\n                            }\n                        }\n                        '})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Warum Reactive?"}),Object(b.jsxs)(l.s,{children:[Object(b.jsx)(l.a,{children:Object(b.jsx)(l.i,{children:"Was passiert eigentlich wenn unsere Anwendung einen HTTP Request verarbeitet?"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.i,{children:"Und was passiert wenn unsere Anwendung 10000 Requests pro Sekunde verarbeiten muss?"})})]})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Verarbeitung eines Requests"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Malen wir das mal lieber auf"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.g,{src:j,width:1024})}),Object(b.jsx)(l.j,{children:Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{children:["Verschiedene externe Systeme",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"DB"}),Object(b.jsx)("li",{children:"Payment"})]})]})})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Und mit Last"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.g,{src:"data:image/png;base64,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",width:512})}),Object(b.jsx)(l.j,{children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"Lastprobleme aus dem einen System kaskadieren ins n\xe4chste"})})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Und mit reactive?"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Das malen wir nochmal auf"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.g,{src:a,width:1024})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Reactive Repository"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.c,{language:"java",children:"\n                        public interface ReactiveCrudRepository<T, ID> extends Repository<T, ID> {\n                            <S extends T> Mono<S> save(S entity);\n                            <S extends T> Flux<S> saveAll(Iterable<S> entities);\n                            <S extends T> Flux<S> saveAll(Publisher<S> entityStream);\n                            Mono<T> findById(ID id);\n                            Mono<T> findById(Publisher<ID> id);\n                            Mono<Boolean> existsById(ID id);\n                            Mono<Boolean> existsById(Publisher<ID> id);\n                            Flux<T> findAll();\n                            Flux<T> findAllById(Iterable<ID> ids);\n                            Flux<T> findAllById(Publisher<ID> idStream);\n                            Mono<Long> count();\n                            Mono<Void> deleteById(ID id);\n                            Mono<Void> deleteById(Publisher<ID> id);\n                            Mono<Void> delete(T entity);\n                            Mono<Void> deleteAllById(Iterable<? extends ID> ids);\n                            Mono<Void> deleteAll(Iterable<? extends T> entities);\n                            Mono<Void> deleteAll(Publisher<? extends T> entityStream);\n                            Mono<Void> deleteAll();\n                        }\n                        "})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Mono und Flux"}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(l.r,{children:"Implementierungen von Publisher"}),Object(b.jsx)(l.c,{language:"java",children:"\n                        package org.reactivestreams;\n                        \n                        public interface Publisher<T> {\n                            public void subscribe(Subscriber<? super T> s);\n                        }\n                        "})]}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Publisher publizieren Daten, Subscriber melden sich am Publisher an um die Daten zu bekommen"})}),Object(b.jsx)(l.j,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Interfaces aus der reactive streams initiative"}),Object(b.jsx)("li",{children:"Observer Pattern"}),Object(b.jsx)("li",{children:"Daten, die asynchron erhalten wurden (z.B. aus einer DB), werden \xfcber den Publisher publiziert"})]})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Mono und Flux"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.c,{language:"java",children:"\n                        package org.reactivestreams;\n                        \n                        public interface Subscriber<T> {\n                            public void onSubscribe(Subscription s);\n                            public void onNext(T t);\n                            public void onError(Throwable t);\n                            public void onComplete();\n                        }\n                        "})}),Object(b.jsx)(l.j,{children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"Das sch\xf6ne, mit dem subscriben muss man sich so gut wie nicht besch\xe4ftigen"})})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Mono und Flux"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Mono: Ein Publisher, der einen Wert publiziert"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Flux: Ein Publisher, der mehrere Werte publiziert"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Die API \xe4hnelt sehr stark dem Optional bzw. Streams"})}),Object(b.jsx)(l.j,{})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Verwendung"}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(l.r,{children:"Interaktion mit einer Datenbank"}),Object(b.jsx)(l.c,{language:"java",children:"\n                        return eventRepository.findAll()\n                            .map(Event::getData)                           // Jedes Event aus der DB wird auf seine Daten gemappt\n                            .reduce(new Order(), (o, e) -> e.process(o));  // Die Daten aller Events werden in eine Order reduced\n                        "})]}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(l.r,{children:"Aufruf einer externen Applikation per HTTP"}),Object(b.jsx)(l.c,{language:"java",children:'\n                        return webClient\n                            .get()\n                            .uri("/api/products")\n                            .accept(MediaType.APPLICATION_JSON)\n                            .exchangeToFlux(clientResponse -> clientResponse.bodyToFlux(Product.class))\n                            .filter(Product::isInStock);  // Nur vorr\xe4tige Produkte kommen beim Subscriber an\n                        '})]})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Unser Controller vom Anfang in Webflux"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.c,{language:"java",children:'\n                        @RestController\n                        @RequestMapping("/api/orders")\n                        class OrderController {\n\n                            @GetMapping(produces = "application/json")\n                            public Flux<OrderDTO> getOrders() {\n                                return orderService.getOrders();\n                            }\n                        }\n                        '})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Um das subscribe k\xfcmmert sich der Servlet Container"})}),Object(b.jsx)(l.j,{children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"Ich muss nur implementieren, was mit den Daten passieren soll."})})})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"\xdcbung"}),Object(b.jsxs)(l.s,{children:[Object(b.jsxs)(l.i,{children:[Object(b.jsx)(l.h,{href:"https://github.com/gossie/neue-fische-reactive-task",children:"GitHub Repository"})," forken oder klonen"]}),Object(b.jsxs)(l.i,{children:["Im OrderController die drei TODOs implementieren",Object(b.jsxs)(l.s,{children:[Object(b.jsx)(l.i,{children:"Erst ReactiveTaskApplicationTests.creationTest() aktivieren und gr\xfcn machen"}),Object(b.jsx)(l.i,{children:"Dann ReactiveTaskApplicationTests.paymentTest() aktivieren und gr\xfcn machen"})]})]}),Object(b.jsxs)(l.i,{children:["F\xfcr den zweiten Test k\xf6nnte das ",Object(b.jsx)(l.h,{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html",children:"JavaDoc"})," vom WebClient helfen"]})]})]}),Object(b.jsxs)(l.m,{children:[Object(b.jsx)(l.f,{children:"Ein kleines Schmankerl nebenbei"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(l.r,{children:"Es muss nicht immer Power Point sein  "})}),Object(b.jsxs)(l.a,{children:[Object(b.jsx)(l.r,{onClick:function(){fetch("http://localhost:8080/api/orders",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({item:Math.random()>.5?t.PIZZA:t.PASTA})}).then((function(e){if(201!==e.status)throw new Error("failed to create order");r()}))},children:"Add order"}),Object(b.jsx)(l.k,{children:s})]})]}),Object(b.jsx)(l.m,{children:Object(b.jsx)(l.r,{children:"Feedback, Fragen, Anmerkungen"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,468)).then((function(A){var n=A.getCLS,t=A.getFID,c=A.getFCP,i=A.getLCP,r=A.getTTFB;n(e),t(e),c(e),i(e),r(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),h()}},[[464,1,2]]]);
//# sourceMappingURL=main.a0469389.chunk.js.map