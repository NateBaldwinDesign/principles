# Principle 
### Design System Starter Toolkit
> *Create typographically proportional interfaces based on design principles*

[![Build Status](https://travis-ci.com/NateBaldwinDesign/principles.svg?token=URhNXWWxqVjisSnKyjxL&branch=master)](https://travis-ci.com/NateBaldwinDesign/principles)

This toolkit allows you to incorporate design principles throughout your entire web interface. Type is scaled in ems, with responsive headlines with a proportional baseline grid.

Axiom builds stylesheets based on a single JSON file `config.json`. Principles of design can be easily entered by designers, which are then incorporated as SASS variables and mixins. 

Custom baseline grid overlay for debugging.

*Inspired by Lightning Design System's "Design Tokens"*

### Built using:
* Gulp
* Sass

### Made possible by:
* Typesettings
* gulp-json-sass

## How it Works

Example properties in `config.json` file:
```json
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
```sass
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

![Example Image](/assets/type-scale.jpg)

## Configuration
### base
This is a group of base, fundamental properties.

##### font-size
This is the base font size (in pixels) for your body copy. 

##### vertical-unit
The vertical grid unit. Margin, padding, and line-height are set to multiples of this value. This is the value that determines the baseline for our vertical rhythm. The default value of 6px allows more fine tuned designs that still obey vertical rhythm.

##### line-multi
The value that multiplies the $base-vertical-unit to get the $base-line-height. This gives type an ideal line-height.

##### scale
This is the modular scale ratio used to determine font sizes, line-heights, margins and padding.

### font
This is a group of fonts.

##### primary
This font stack is used in headlines.

##### secondary
This font stack is used in body copy.

##### monospace
This font stack is the monospace font.

### paragraph
This is a group of paragraph-related configurations.

##### indent
Default: `true`
This indents the first line of a new paragraph.

##### justiy
Default: `true`
Configures whether your paragraphs are ragged or justified.

### whitespace
This is a group of properties related to the spacing.

##### margin
Ratio that determines global margins based on the base font size.

##### padding
Ratio that determines global padding based on the base font size.