import './App.css';
import './appStyles.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
	return (
		<div className="App">
			<UserProvider value="Chris Legendo">
				<ComponentC />
			</UserProvider>
			{/* <CounterRender render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} /> } /> */}
			{/* <CounterRender render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} /> */}

			{/* <HoverCounterTwo />
			<ClickCounterTwo />
			<User render={(isLoggedIn) => isLoggedIn ? 'Boss Legendo' : 'Guest'} /> */}
			{/* <HoverCounter /> */}
			{/* <ClickCounter /> */}
			{/* <ErrorBoundary>
				<Hero heroName="Batman" />
			</ErrorBoundary>

			<ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>

			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary> */}
			{/* <PortalDemo /> */}
			{/* <FRParentInput /> */}
			{/* <FocusInput /> */}
			{/* <RefsDemo /> */}
			{/* <ParentComp /> */}
			{/* <Table /> */}
			{/* <FragmentDemo /> */}
			{/* <LifecycleA /> */}
			{/* <FormData /> */}
			{/* <h1 className='error'>Error</h1>
			<h1 className={styles.success}>Success</h1> */}
			{/* <Inline /> */}
			{/* <StyleSheet primary={true} /> */}
			{/* <NameList /> */}
			{/* <UserGreeting /> */}
			{/* <ParentComponent /> */}
			{/* <EventBind /> */}
			{/* <Counter /> */}
			{/* <Greet name="Lucian" heroName="Godfather" /> */}
			{/* <Greet name="Chadwin" heroName="Black Panther" /> */}
			{/* <Welcome name="Hollie" heroName="Catwoman" /> */}
			{/* <Welcome name="Jennifer" heroName="Katniss" /> */}
			{/* <FunctionClick /> */}
			{/* <ClassClick /> */}
		</div>
	);
}

export default App;
