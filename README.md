# Pokemon Card Collection - Terminal (CLI) Practice Project

A simple Pokemon card display application to practice command line interface (CLI) operations. This project displays Pokemon cards with theme-switching functionality, providing a practical environment to learn CLI commands.

## Project Overview
- Display Pokemon cards in a responsive grid
- Toggle between light and dark themes
- Simple file structure for practising file operations

## Setup
1. Fork this repository
2. Clone your forked repository:
   ```bash
   git clone [your-fork-url]
   ```
3. Open the project in VS Code
4. Use Live Server to run the project

## Project Structure
```
pokemon-cli-practice/
├── css/
│   ├── style.css
│   └── themes/
│       ├── dark.css
│       └── light.css
├── js/
│   ├── app.js
│   ├── modules/
│   │   ├── cards.js
│   │   └── utils.js
│   └── data/
│       └── pokemon.json
└── index.html
```

## CLI Practice Exercises

### Exercise 1: Navigation and Directory Structure
**Covers: Basic Navigation (Module 1.2)**

1. Open your terminal in the project directory
2. Practice these commands:
   ```bash
   # Print your current directory
   pwd

   # List all files and directories
   ls
   
   # List with detailed information
   ls -l
   
   # Navigate to css folder
   cd css
   
   # List contents of themes folder without changing directory
   ls themes/
   
   # Navigate back to project root
   cd ..
   ```

### Exercise 2: File Operations
**Covers: File Operations (Module 1.2, 1.3)**

1. Create a backup of your CSS files:
   ```bash
   # Create a backup directory
   mkdir backup
   
   # Copy CSS files to backup
   cp css/style.css backup/
   cp -r css/themes backup/
   ```

2. Practice file creation:
   ```bash
   # Create a new theme file
   touch css/themes/blue.css
   
   # Create multiple files at once
   touch js/modules/theme.js js/modules/config.js
   ```

### Exercise 3: File Reading and Text Processing
**Covers: File Operations (Module 1.3) and Text Processing (Module 2.1)**

1. Examine file contents:
   ```bash
   # View pokemon.json content
   cat js/data/pokemon.json
   
   # View first few lines
   head js/data/pokemon.json
   
   # Search for specific Pokemon
   grep "Pikachu" js/data/pokemon.json
   
   # Count lines in files
   wc -l js/data/pokemon.json
   ```

### Exercise 4: File Permissions
**Covers: File Permissions (Module 1.3)**

1. Check and modify permissions:
   ```bash
   # View file permissions
   ls -l js/app.js
   
   # Make files readable
   chmod 644 js/*.js
   
   # Make directories accessible
   chmod 755 js/modules/
   ```

### Exercise 5: Text Editing and Processing
**Covers: Text Processing (Module 2.1)**

1. Use command line editors:
   ```bash
   # Open with nano
   nano css/themes/blue.css
   
   # Add basic CSS content
   # Press Ctrl + X to exit, Y to save
   ```

2. Process Pokemon data:
   ```bash
   # Count Pokemon of each type
   grep "type" js/data/pokemon.json | sort | uniq -c
   ```

### Exercise 6: Input/Output Practice
**Covers: I/O and Redirection (Module 2.3)**

1. Practice redirection:
   ```bash
   # Create a new Pokemon entry
   echo '{"name": "Gengar", "type": "Ghost"}' >> js/data/pokemon.json
   
   # Combine CSS files
   cat css/themes/*.css > css/themes/combined.css
   
   # Filter and save specific Pokemon
   grep "Fire" js/data/pokemon.json > fire-pokemon.json
   ```

## Extra Challenges

1. Style Customization:
   - Create a new theme file
   - Modify color schemes using command line editors
   - Update the theme switcher code

2. Data Management:
   - Add new Pokemon to the JSON file
   - Sort Pokemon data using CLI tools
   - Create type-specific Pokemon lists

3. Project Organization:
   - Create additional module directories
   - Set up a development and production structure
   - Implement a backup system using CLI commands

## Tips
- Use tab completion to navigate faster
- Try `--help` flag with commands to learn more
- Keep track of your current directory with `pwd`
- Use relative paths (`./ ../`) when possible
- Make regular backups as you practice

## Common Issues
- "Permission denied": Check file permissions with `ls -l`
- "Command not found": Verify command installation
- "No such file or directory": Check current directory with `pwd`
- CORS issues: Ensure you're using Live Server

## Resources
- Built-in command help: `man [command]` or `[command] --help`
- Mozilla Developer Network (MDN) for web development concepts

Remember to make regular backups of your project files as you practice these exercises.
