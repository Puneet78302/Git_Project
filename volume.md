'''mermaid
'''
flowchart TD

A["Create Volume<br><code>docker volume create demo-vol</code>"]

B["Run Container test1<br>with demo-vol mounted<br><code>docker run ... --mount source=demo-vol ...</code>"]

C["Inside test1: Create File<br><code>echo 'Hello...' > /app/myfile.txt</code>"]

D["Exit test1"]

E["Remove Container test1<br><code>docker rm test1</code>"]

F["Run Container test2<br>Mount SAME volume"]

G["View File Exists<br><code>cat /app/myfile.txt</code>"]

A --> B --> C --> D --> E --> F --> G
