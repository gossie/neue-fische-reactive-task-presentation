import React, { useState } from 'react';
import { Deck, Slide, Heading, CodePane, OrderedList, ListItem, UnorderedList, Appear, Text, Link, Notes, Image } from 'spectacle';
import singleRequest from './single-request.png';
import withLoad from './with-load.png';

enum Item {
    PIZZA = "PIZZA",
    PASTA = "PASTA"
}

interface Order {
    item: Item;
}

function App() {

    const [orders, setOrders] = useState([]);

    const addOrder = () => {
        fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                item: Math.random() > 0.5 ? Item.PIZZA : Item.PASTA
            })
        })
        .then(response => {
            if (response.status === 201) {
                fetch('http://localhost:8080/api/orders', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(ordersResponse => ordersResponse.json())
                .then(setOrders);
            } else {
                throw new Error('failed to create order');
            }
        })
    }

    const listItems = orders.map((order: Order) => order.item).map((item, index) => <ListItem key={index}>{item}</ListItem>)

    return (
        <Deck>
            <Slide>
                <Heading>Reactive Spring</Heading>
            </Slide>
            <Slide>
                <Heading>Hallo</Heading>
            </Slide>
            <Slide>
                <Heading>Spring MVC Recap</Heading>
                <Appear>
                    <CodePane language="java">
                        {`
                        @RestController
                        @RequestMapping("/api/orders")
                        class OrderController {

                            @GetMapping(produces = "application/json")
                            public List<OrderDTO> getOrders() {
                                return orderService.getOrders();
                            }
                        }
                        `}
                    </CodePane>
                </Appear>
            </Slide>
            <Slide>
                <Heading>Warum Reactive?</Heading>
                <UnorderedList>
                    <Appear>
                        <ListItem>Was passiert eigentlich wenn unsere Anwendung einen HTTP Request verarbeitet?</ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>Und was passiert wenn unsere Anwendung 10000 Requests pro Sekunde verarbeiten muss?</ListItem>
                    </Appear>
                </UnorderedList>
            </Slide>
            <Slide>
                <Heading>Verarbeitung eines Requests</Heading>
                <Appear>
                    <Text>Malen wir das mal lieber auf</Text>
                </Appear>
                <Appear>
                    <Image src={singleRequest} width={1024} />
                </Appear>
                <Notes>
                    <ul>
                        <li>
                            Verschiedene externe Systeme
                            <ul>
                                <li>DB</li>
                                <li>Payment</li>
                            </ul>
                        </li>
                    </ul>
                </Notes>
            </Slide>
            <Slide>
                <Heading>Und mit Last</Heading>
                <Appear>
                    <Image src={withLoad} width={512} />
                </Appear>
                <Notes>
                    <ul>
                        <li>Lastprobleme aus dem einen System kaskadieren ins nächste</li>
                    </ul>
                </Notes>
            </Slide>
            <Slide>
                <Heading>Und dieses Reactive kann das jetzt besser?</Heading>
                <Appear>
                    <Text>Ja, aber das malen wir nochmal auf</Text>
                </Appear>
                <Appear>
                    <Text>Das Bild macht hier jetzt keinen Sinn, weil das Resultat das gleiche ist, nur der Weg ein anderer.</Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading>Reactive Repository</Heading>
                <Appear>
                    <CodePane language="java">
                        {`
                        public interface ReactiveCrudRepository<T, ID> extends Repository<T, ID> {
                            <S extends T> Mono<S> save(S entity);
                            <S extends T> Flux<S> saveAll(Iterable<S> entities);
                            <S extends T> Flux<S> saveAll(Publisher<S> entityStream);
                            Mono<T> findById(ID id);
                            Mono<T> findById(Publisher<ID> id);
                            Mono<Boolean> existsById(ID id);
                            Mono<Boolean> existsById(Publisher<ID> id);
                            Flux<T> findAll();
                            Flux<T> findAllById(Iterable<ID> ids);
                            Flux<T> findAllById(Publisher<ID> idStream);
                            Mono<Long> count();
                            Mono<Void> deleteById(ID id);
                            Mono<Void> deleteById(Publisher<ID> id);
                            Mono<Void> delete(T entity);
                            Mono<Void> deleteAllById(Iterable<? extends ID> ids);
                            Mono<Void> deleteAll(Iterable<? extends T> entities);
                            Mono<Void> deleteAll(Publisher<? extends T> entityStream);
                            Mono<Void> deleteAll();
                        }
                        `}
                    </CodePane>
                </Appear>
            </Slide>
            <Slide>
                <Heading>Mono und Flux</Heading>
                <Text>Implementierungen von Publisher</Text>
                <Text>API ähnlich wie Optional und Stream</Text>
                <Notes>
                    <ul>
                        <li>Observer Pattern</li>
                    </ul>
                </Notes>
            </Slide>
            <Slide>
                <Heading>Verwendung</Heading>
                <Appear>
                    <Text>Interaktion mit einer Datenbank</Text>
                    <CodePane language="java">
                        {`
                        return eventRepository.findAll()
                            .map(Event::getData)       // Jedes Event aus der DB wird auf seine Daten gemappt
                            .reduce(new Order(), ());  // Die Daten aller Events werden in eine Order reduced
                        `}
                    </CodePane>
                </Appear>
                <Appear>
                    <Text>Aufruf einer externen Applikation</Text>
                    <CodePane language="java">
                        {`
                        return webClient
                            .get()
                            .uri("/api/products")
                            .accept(MediaType.APPLICATION_JSON)
                            .exchangeToMono(clientResponse -> clientResponse.bodyToMono(PaymentResponse.class))
                            .filter(Product::isInStock);
                        `}
                    </CodePane>
                </Appear>
            </Slide>
            <Slide>
                <Heading>Unser Controller vom Anfang in Webflux</Heading>
                <CodePane language="java">
                    {`
                    @RestController
                    @RequestMapping("/api/orders")
                    class OrderController {

                        @GetMapping(produces = "application/json")
                        public Flux<OrderDTO> getOrders() {
                            return orderService.getOrders();
                        }
                    }
                    `}
                </CodePane>
            </Slide>
            <Slide>
                <Heading>Übung</Heading>
                <UnorderedList>
                    <ListItem><Link href="https://github.com/gossie/neue-fische-reactive-task">GitHub Repository</Link> forken oder klonen</ListItem>
                    <ListItem>
                        Im OrderController die drei TODOs implementieren
                        <UnorderedList>
                            <ListItem>Erst ReactiveTaskApplicationTests.creationTest() aktivieren und grün machen</ListItem>
                            <ListItem>Dann ReactiveTaskApplicationTests.paymentTest() aktivieren und grün machen</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>Für den zweiten Test könnte das <Link href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/reactive/function/client/WebClient.html">JavaDoc</Link> vom WebClient helfen</ListItem>
                </UnorderedList>
                
            </Slide>
            <Slide>
                <Heading>Ein kleines Schmankerl nebenbei</Heading>
                <Appear>
                    <Text>Es muss nicht immer Power Point sein  </Text>
                </Appear>
                <Appear>
                    <Text onClick={() => addOrder()}>Add order</Text>
                    <OrderedList>
                        { listItems }
                    </OrderedList>
                </Appear>
            </Slide>
            <Slide>
                <Text>Feedback, Fragen, Anmerkungen</Text>
            </Slide>
        </Deck>
    );
}

export default App;
