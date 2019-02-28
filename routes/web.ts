import { Router } from "@fortifico/framework/routing/Router";

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

export function web(router: Router): void
{
    router.get("/", "HomeController@index");
}