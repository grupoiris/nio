/*! SQL LITE */
var webdb = {};
webdb.db = null;
// Función para crear la base de datos
webdb.open = function(options) {
	if (typeof openDatabase == "undefined") return;
	// Opciones por defecto
   	var options = options || {};
	options.name = options.name || 'noname';
	options.mb = options.mb || 5;
	options.description = options.description || 'no description';
	options.version = options.version || '1.0';
	// Definimos el tamaño en MB
   	var dbSize = options.mb * 1024 * 1024;
	// Cargamos la base de datos
   	webdb.db = openDatabase(options.name, options.version, options.description, dbSize);
};
// ExecuteSql
webdb.executeSql = function(sql, data, onSuccess, onError){
	if (!webdb.db) return;
	webdb.db.transaction(function(tx){tx.executeSql(sql, data,onSuccess,onError);});
};
// Base de datos
var opt = {
	name: "nio",
	mb: 2,
	description: "Base de datos local de nio",
	version: "1.0"
};
// Abrimos la base de datos
webdb.open(opt);
/*! END SQL LITE */

function saveData(form_nombre, form_email, form_telefono, form_proyecto, form_comentarios,form_terminos){
	webdb.executeSql('CREATE TABLE IF NOT EXISTS register (id INTEGER PRIMARY KEY ASC,nombre TEXT, email TEXT,  telefono TEXT, proyecto TEXT, comentarios TEXT,terminos TEXT)', [],
		function(tx, r){},
		function(tx, e){});
		webdb.executeSql('INSERT INTO register (nombre, email, telefono, proyecto,comentarios,terminos) VALUES (?,?,?,?,?,?)', 
					[ form_nombre,form_email,form_telefono,form_proyecto,form_comentarios,form_terminos],
					function(tx, r){
						console.log(tx);
					},
					function(tx, e){
						console.log(e);
					});
		console.log("saveData");
}

function getSQL(){
	console.log("getSQL");
	$('.resultados_inscritos').html("");
	webdb.executeSql('SELECT * FROM register', [],
		function(tx, r){
			var html_response;
			var rows = r.rows,
				tot = rows.length;
				html_response += "<p>Total: "+tot+"</p>";
				html_response += '<table><tr style="font-weight: bold;"><td>Nombre</td><td>Email</td><td>Telefono</td><td>Proyecto</td><td>Comentarios</td></tr>';
			for(var i=0; i<tot; i++){
				var row = rows.item(i);
				html_response += "<tr><td>"+rows.item(i).nombre+"</td><td>"+rows.item(i).email+"</td><td>"+rows.item(i).telefono+"</td><td>"+rows.item(i).proyecto+"</td><td>"+rows.item(i).comentarios+"</td></tr>";
			}
			html_response +="</table>";
			$('.resultados_inscritos').append(html_response);
		},
		function(tx, e){});
}
function deleteSQL(){
	webdb.executeSql("DROP TABLE IF EXISTS register");
}
function exeSQL(sql, func){
	//
	webdb.executeSql(sql, [],
		function(tx, r){
			mensaje('SQL : exito');
			if(func != undefined){
				func(r);
			}
		},
		function(tx, e){
			mensaje('SQL : error');
		});
}