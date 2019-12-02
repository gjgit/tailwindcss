import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch
} from "react-router-dom";

const Sandwiches = () => (
	<React.Fragment>
		<div className="bg-white text-purple-lighter w-64 pb-6 md:block overflow-y-auto" />
		<div className="flex-1 flex flex-col bg-gray-200 overflow-hidden" />
	</React.Fragment>
);

const Tacos = ({ routes }) => (
	<React.Fragment>
		<div className="bg-white text-purple-lighter w-64 pb-6 md:block overflow-y-auto">
			<Link to="/tacos/bus">
				<div className="text-black p-3 flex justify-between border-b cursor-pointer hover:bg-gray-100">
					<div class="flex">
						<div class="py-1 bg-black mr-4 rounded-lg">
							<img src="" alt="" className="h-8 w-10" />
						</div>
						<div>
							<p class="text-sm font-semibold">Account</p>
							<p class="text-xs font-semibold opacity-50 ">
								Delivery boy management.
							</p>
						</div>
					</div>
				</div>
			</Link>
			<Link to="/tacos/cart">
				<div className="text-black p-3 flex justify-between border-b cursor-pointer hover:bg-gray-100">
					<div class="flex">
						<div class="py-1 bg-black mr-4 rounded-lg">
							<img src="" alt="" className="h-8 w-10" />
						</div>
						<div>
							<p class="text-sm font-semibold">Account</p>
							<p class="text-xs font-semibold opacity-50 ">
								Delivery boy management.
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
		<div className="flex-1 flex flex-col bg-gray-200 overflow-hidden">
			<div className="px-6 py-4 flex-1 overflow-y-scroll bg-gray-200">
				{routes.map(route => (
					<RouteWithSubRoutes key={route.path} {...route} />
				))}
			</div>
		</div>
	</React.Fragment>
);

const Bus = () => (
	<React.Fragment>
		<div class="flex my-6 mx-10">
			<p className="text-2xl font-semibold">BUS</p>
		</div>
		<div className="my-6 mx-10 w-11/12 h-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			BUS
		</div>
	</React.Fragment>
);

const Cart = () => (
	<React.Fragment>
		<div class="flex my-6 mx-10">
			<p className="text-2xl font-semibold">CART</p>
		</div>
		<div className="my-6 mx-10 w-11/12 h-full  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			CART
		</div>
	</React.Fragment>
);

const routes = [
	{
		path: "/sandwiches",
		component: Sandwiches
	},
	{
		path: "/tacos",
		component: Tacos,
		routes: [
			{
				path: "/tacos/bus",
				component: Bus
			},
			{
				path: "/tacos/cart",
				component: Cart
			}
		]
	}
];

const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => <route.component {...props} routes={route.routes} />}
	/>
);

function App() {
	return (
		<Router>
			<div className="font-sans antialiased h-screen flex ">
				<div className="bg-gray-900  w-20 p-5 hidden md:block">
					<div class="cursor-pointer mb-12 relative">
						<div class="hover:bg-white hover:rounded-full bg-blue-400 h-10 w-10 flex items-center justify-center rounded-full realtive">
							<div class="bg-green-400 h-3 w-3 absolute rounded-full left-0 top-0 border-solid border-2 border-gray-900" />
							<svg
								width="30"
								height="30"
								viewBox="0 0 30 30"
								class="fill-current text-black"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M22.0485 10.977C20.9242 12.9243 18.9769 13.9637 17.3152 13.6739L16.2758 15.4743L24.702 20.3392L23.705 22.0661L15.2787 17.2012L10.4016 25.6204L8.67472 24.6233L15.5761 12.6699C14.4943 11.3757 14.4208 9.16955 15.5451 7.22224C16.9053 4.88036 19.4588 3.82348 21.2469 4.85587C23.0473 5.89529 23.399 8.63768 22.0485 10.977ZM13.2358 13.711L11.2347 17.1771L6.10557 14.2239C4.19239 13.1112 3.53757 10.6674 4.64066 8.75678L13.2358 13.711Z"
								/>
							</svg>
						</div>
					</div>
					<Link to="/sandwiches">
						<div class="cursor-pointer mb-4 relative">
							<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
								<svg
									width="24"
									height="24"
									class="fill-current text-white"
								>
									<path d="M3 3H11V13H3V3ZM21 3H13V9H21V3ZM9 11V5H5V11H9ZM19 7V5H15V7H19ZM19 13V19H15V13H19ZM9 19V17H5V19H9ZM21 11H13V21H21V11ZM3 15H11V21H3V15Z" />
								</svg>
							</div>
						</div>
					</Link>
					<Link to="/tacos">
						<div class="cursor-pointer mb-4 relative">
							<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
								<svg
									width="24"
									height="24"
									class="fill-current text-white"
								>
									<path d="M9 9H11V2H13V9C13 11.21 11.21 13 9 13V22H7V13C4.79004 13 3 11.21 3 9V2H5V9H7V2H9V9ZM16 14V6C16 4.23999 18.24 2 21 2V22H19V14H16Z" />
								</svg>
							</div>
						</div>
					</Link>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM20 19V9H12V11H14V13H12V15H14V17H12V19H20ZM18 11H16V13H18V11ZM16 15H18V17H16V15Z" />
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M16.5464 13C17.2964 13 17.9563 12.59 18.2964 11.97L21.8763 5.47998C22.2463 4.82001 21.7664 4 21.0063 4H6.2063L5.26636 2H1.99634V4H3.99634L7.59631 11.59L6.24634 14.03C5.51636 15.37 6.47632 17 7.99634 17H19.9963V15H7.99634L9.09631 13H16.5464ZM6.00635 20C6.00635 18.9 6.89636 18 7.99634 18C9.09631 18 9.99634 18.9 9.99634 20C9.99634 21.1 9.09631 22 7.99634 22C6.89636 22 6.00635 21.1 6.00635 20ZM16.0063 20C16.0063 18.9 16.8964 18 17.9963 18C19.0963 18 19.9963 18.9 19.9963 20C19.9963 21.1 19.0963 22 17.9963 22C16.8964 22 16.0063 21.1 16.0063 20ZM19.3064 6H7.15637L9.52637 11H16.5464L19.3064 6Z" />
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M9 12C10.9301 12 12.5 10.43 12.5 8.5C12.5 6.57001 10.9301 5 9 5C7.06995 5 5.5 6.57001 5.5 8.5C5.5 10.43 7.06995 12 9 12ZM2 17.25C2 14.92 6.66003 13.75 9 13.75C11.34 13.75 16 14.92 16 17.25V19H2V17.25ZM9 15.75C7.20996 15.75 5.17993 16.42 4.33997 17H13.6599C12.8199 16.42 10.7899 15.75 9 15.75ZM10.5 8.5C10.5 7.66998 9.82996 7 9 7C8.17004 7 7.5 7.66998 7.5 8.5C7.5 9.33002 8.17004 10 9 10C9.82996 10 10.5 9.33002 10.5 8.5ZM16.04 13.81C17.2001 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM18.5 8.5C18.5 10.43 16.9301 12 15 12C14.46 12 13.96 11.87 13.5 11.65C14.13 10.76 14.5 9.66998 14.5 8.5C14.5 7.33002 14.13 6.23999 13.5 5.34998C13.96 5.13 14.46 5 15 5C16.9301 5 18.5 6.57001 18.5 8.5Z" />
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM20 19V9H12V11H14V13H12V15H14V17H12V19H20ZM18 11H16V13H18V11ZM16 15H18V17H16V15Z" />
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H5.98999C4.89001 22 4 21.1 4 20L4.01001 4C4.01001 2.89999 4.90002 2 6 2ZM6 4V20H18V9H13V4H6Z" />
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11 5H15.41L19.4399 9.03C22.03 9.23 24 11.35 24 14C24 16.8 21.8 19 19 19C16.2 19 14 16.8 14 14C14 13.37 14.11 12.77 14.3199 12.23L11.55 15H9.90002C9.44995 17.31 7.45996 19 5 19C2.19995 19 0 16.8 0 14C0 11.2 2.19995 9 5 9H16.59L14.59 7H11V5ZM10.72 13L12.72 11H8.97998C9.28003 11.39 9.52002 11.83 9.69995 12.31L9.94995 13H10.72ZM19 17C17.34 17 16 15.66 16 14C16 12.34 17.34 11 19 11C20.66 11 22 12.34 22 14C22 15.66 20.66 17 19 17ZM2 14C2 15.63 3.37 17 5 17C6.28003 17 7.40002 16.15 7.81995 15H5V13H7.81995C7.40002 11.85 6.28003 11 5 11C3.37 11 2 12.37 2 14Z"
								/>
							</svg>
						</div>
					</div>
					<div class="cursor-pointer mb-4 relative">
						<div class="hover:bg-gray-800 hover:rounded-lg bg-gray-900 h-10 w-10 flex items-center justify-center">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current text-white"
							>
								<path d="M20 8.69V4H15.3099L12 0.690002L8.68994 4H4V8.69L0.689941 12L4 15.31V20H8.68994L12 23.31L15.3099 20H20V15.31L23.3099 12L20 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.5199 18H5.99988V14.48L3.5199 12L5.99988 9.51999V6H9.5199L11.9999 3.51999L14.4799 6H17.9999V9.51999L20.4799 12L17.9999 14.48ZM6.5 12C6.5 8.97 8.96997 6.5 12 6.5C15.03 6.5 17.5 8.97 17.5 12C17.5 15.03 15.03 17.5 12 17.5C8.96997 17.5 6.5 15.03 6.5 12ZM12 15.5C10.0699 15.5 8.5 13.93 8.5 12C8.5 10.07 10.0699 8.5 12 8.5C13.9301 8.5 15.5 10.07 15.5 12C15.5 13.93 13.9301 15.5 12 15.5ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" />
							</svg>
						</div>
					</div>
				</div>

				{routes.map(route => (
					<RouteWithSubRoutes key={route.path} {...route} />
				))}
			</div>
		</Router>
	);
}

export default App;
