import json
import re

def clean_name(name):
    # Remove FS22 prefix variants
    name = re.sub(r'^FS?22[_ ]?', '', name, flags=re.IGNORECASE)
    name = re.sub(r'^FS[_ ]?', '', name, flags=re.IGNORECASE)
    
    # Replace underscores and hyphens with spaces
    name = name.replace('_', ' ').replace('-', ' ')
    
    # Split CamelCase (e.g., PlaceAnywhere -> Place Anywhere)
    # But avoid splitting acronyms (e.g., TDD, 5S) if possible, simpler to just split Uppercase
    # regex: lookbehind for lowercase, lookahead for uppercase
    name = re.sub(r'(?<=[a-z])(?=[A-Z])', ' ', name)
    
    # Also split numbers if attached to letters? e.g. T7 -> T 7? No, T7 is fine.
    # But 5090 -> JohnDeere5090 -> John Deere 5090
    name = re.sub(r'(?<=[a-zA-Z])(?=\d)', ' ', name)
    name = re.sub(r'(?<=\d)(?=[a-zA-Z])', ' ', name)
    
    return name.strip()

with open('fs22_mods_gen.json', 'r', encoding='utf-8') as f:
    mods = json.load(f)

for mod in mods:
    mod['name'] = clean_name(mod['downloadUrl'].split('/')[-1].replace('.zip', '')) # Re-clean from filename to be safe
    mod['description'] = f"{mod['name']} - FS22 için indirin. Çiftliğinize değer katacak kaliteli bir mod."

with open('fs22_mods_gen.json', 'w', encoding='utf-8') as f:
    json.dump(mods, f, indent=4, ensure_ascii=False)
    
print("Fixed names in fs22_mods_gen.json")
