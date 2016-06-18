# Axiom Typescale
> *Create typographically proportional interfaces based on design principles*

This toolset allows you to incorporate design principles throughout your entire web interface. Type is scaled in ems, with responsive headlines with a proportional baseline grid.

Axiom builds stylesheets based on a single JSON file `principles.json`. Principles of design can be easily entered by designers, which are then incorporated as SASS variables and mixins. 

Custom baseline grid overlay for debugging.

*Inspired by Lightning Design System's "Design Tokens"*

### Built using:
* Gulp
* Sass

### Made possible by:
* Typesettings
* gulp-json-sass

## How it Works

Example properties in `principles.json` file:
```
{
	"base": {
		"font-size": "16px;",
		"line-height": "22px;",
		"scale": "1.414;"
	},
	"font": {
		"primary": "Georgia, Times New Roman, serif;",
		"secondary": "Helvetica, Arial, sans-serif;"
	},
	"whitespace": {
		"margin": "1.5;",
		"padding": "1.5;"
	},
	"color": {
		"primary": "#f26322;",
		"secondary": "#310031;",
		"base": "#000000;"
	}
}
```
Gulp generates variables during SASS compilation:
```
	$base-font-size: 		16px;
	$base-line-height: 		22px;
	$base-scale: 			1.414;
	$font-primary: 			Georgia, Times New Roman, serif;
	$font-secondary: 		Helvetica, Arial, sans-serif;
	$whitespace-margin:		1.5;
	$whitespace-padding:	1.5;
	$color-primary: 		#f26322;
	$color-secondary: 		#310031;
	$color-base: 			#000000;
```
These variables are pulled into variables and mixins from [typesettings](http://typesettings.io) as well as some additional custom mixins to generate proportional values.